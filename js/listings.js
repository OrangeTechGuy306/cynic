/**
 * CYNIC AGENT PORTAL - LISTINGS & MEDIA HANDLER
 * Handles listings rendering, status toggling, media uploaders, and add/edit forms
 */

// Retrieve listings from localStorage
function getStoredListings() {
  const stored = localStorage.getItem('cynic_listings');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  return CYNIC_DATA.listings;
}

function saveStoredListings(listings) {
  localStorage.setItem('cynic_listings', JSON.stringify(listings));
}

// Render Listings Grid
function renderListingsGrid(containerId, filterStatus = 'all', searchQuery = '') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const listings = getStoredListings();
  let filtered = listings;

  if (filterStatus !== 'all') {
    const f = filterStatus.toLowerCase();
    if (f === 'verified') {
      filtered = filtered.filter(item => (item.verificationStatus || 'Verified') === 'Verified' && item.status !== 'Occupied');
    } else if (f === 'unverified' || f === 'pending') {
      filtered = filtered.filter(item => (item.verificationStatus || 'Verified') === 'Unverified');
    } else if (f === 'occupied') {
      filtered = filtered.filter(item => item.status === 'Occupied');
    } else {
      filtered = filtered.filter(item => 
        (item.status && item.status.toLowerCase() === f) || 
        (item.verificationStatus && item.verificationStatus.toLowerCase() === f)
      );
    }
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.town.toLowerCase().includes(q) ||
      item.schoolArea.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: 12px; border: 1px dashed var(--light-gray);">
        <i class="ri-home-line" style="font-size: 3rem; color: var(--slate-400);"></i>
        <h3 style="margin-top: 12px; color: var(--dark-slate);">No listings found</h3>
        <p style="color: var(--slate-500); font-size: 0.9rem;">Try adjusting your search query or filter options.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    let statusClass = 'status-verified';
    let statusText = '<i class="ri-verified-badge-fill"></i> Verified';
    
    if (item.status === 'Occupied') {
      statusClass = 'status-occupied';
      statusText = '<i class="ri-lock-2-fill"></i> Occupied';
    } else if ((item.verificationStatus || 'Verified') === 'Unverified') {
      statusClass = 'status-unverified';
      statusText = '<i class="ri-time-fill"></i> Pending Review';
    }

    const firstImage = (item.images && item.images.length > 0) 
      ? item.images[0] 
      : 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80';

    const commentCount = (item.comments && item.comments.length) || 0;

    return `
      <div class="listing-card" id="card-${item.id}">
        <div class="listing-media">
          <img src="${firstImage}" alt="${item.title}" class="listing-thumbnail" loading="lazy" />
          <span class="listing-status-badge ${statusClass}">${statusText}</span>
          ${item.hasVideo ? `
            <div class="video-badge">
              <i class="ri-video-fill"></i>
              <span>${item.videoDuration || 'Video'}</span>
            </div>
          ` : ''}
        </div>
        <div class="listing-content">
          <div class="listing-location-tag">
            <i class="ri-map-pin-2-fill"></i>
            <span>${item.town} &bull; ${item.schoolArea.split('(')[0]}</span>
          </div>
          <h3 class="listing-title">${item.title}</h3>
          
          <div class="listing-meta-row">
            <span><i class="ri-building-line"></i> ${item.apartmentType}</span>
            <span><i class="ri-restaurant-line"></i> ${item.kitchenType}</span>
            <span><i class="ri-drop-line"></i> ${item.toiletBathType.split('/')[0]}</span>
          </div>

          <div class="listing-pricing">
            <div class="price-total">${formatNaira(item.totalPackage)} <span style="font-size: 0.8rem; font-weight: 500; color: var(--slate-500);">/ total package</span></div>
            <div class="price-sub">Annual: ${formatNaira(item.annualCharge)} &bull; Cleaning: ${formatNaira(item.cleaningFee)}</div>
          </div>

          ${item.isRoommateShared ? `
            <div style="margin: 8px 0;">
              <span class="roommate-allocation-badge">
                <i class="ri-team-fill"></i>
                <span>${item.roommatesGotten || 1} Gotten &bull; <span class="highlight-needed">${item.roommatesNeeded || 1} Looking to Join</span></span>
              </span>
              ${item.currentRoommates && item.currentRoommates.length > 0 ? `
                <div style="font-size: 0.76rem; color: var(--slate-500); margin-top: 4px;">
                  Occupants: <strong>${item.currentRoommates.map(r => r.name).join(', ')}</strong>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <div class="flex items-center justify-between" style="margin: 8px 0 12px;">
            <span class="listing-interests-count">
              <i class="ri-user-heart-line"></i> ${item.interestsCount || 0} Interested
            </span>
            <button type="button" onclick="openListingCommentsModal('${item.id}')" class="listing-comment-pill" title="View & Reply to Comments">
              <i class="ri-chat-3-line"></i>
              <span>Comments</span>
              <span class="comment-count-badge" id="comment-pill-count-${item.id}">${commentCount}</span>
            </button>
          </div>

          <div class="listing-actions-row">
            <a href="edit-listing.html?id=${item.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
              <i class="ri-edit-line"></i> Edit
            </a>
            <a href="public-listings.html?id=${item.id}" target="_blank" class="btn btn-outline-green btn-sm" style="flex: 1;" title="Preview Public Listing">
              <i class="ri-external-link-line"></i> Preview
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Comments Modal & Reply Management
let currentActiveListingId = null;

function ensureCommentModalExists() {
  if (document.getElementById('commentReplyModal')) return;
  const modalDiv = document.createElement('div');
  modalDiv.className = 'cynic-modal-backdrop';
  modalDiv.id = 'commentReplyModal';
  modalDiv.innerHTML = `
    <div class="cynic-modal-dialog">
      <div class="cynic-modal-header">
        <div>
          <h3 id="modalListingTitle">Property Comments</h3>
          <span style="font-size: 0.8rem; color: var(--slate-500);" id="modalListingSubtitle">Loading...</span>
        </div>
        <button type="button" class="cynic-modal-close-btn" onclick="closeCommentModal()">
          <i class="ri-close-line"></i>
        </button>
      </div>

      <div class="cynic-modal-body" id="modalCommentsList"></div>

      <div class="cynic-modal-footer">
        <button type="button" class="btn btn-secondary" onclick="closeCommentModal()">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);

  modalDiv.addEventListener('click', (e) => {
    if (e.target.id === 'commentReplyModal') closeCommentModal();
  });
}

function openListingCommentsModal(listingId) {
  ensureCommentModalExists();
  currentActiveListingId = listingId;
  const listings = getStoredListings();
  const listing = listings.find(l => l.id === listingId);
  if (!listing) return;

  document.getElementById('modalListingTitle').textContent = `Comments on Listing`;
  document.getElementById('modalListingSubtitle').textContent = `${listing.title} (${listing.location || listing.town})`;

  renderModalComments(listing);
  document.getElementById('commentReplyModal').classList.add('active');
}

function renderModalComments(listing) {
  const body = document.getElementById('modalCommentsList');
  if (!body) return;
  const comments = listing.comments || [];

  if (comments.length === 0) {
    body.innerHTML = `
      <div class="text-center" style="padding: 28px 16px; color: var(--slate-400);">
        <i class="ri-chat-smile-2-line" style="font-size: 2.2rem;"></i>
        <h4 style="margin-top: 10px; color: var(--dark-slate);">No Comments Yet</h4>
        <p style="font-size: 0.88rem; color: var(--slate-500);">Students haven't asked questions on this property yet.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = comments.map(c => `
    <div class="listing-comment-card" id="comment-box-${c.id}">
      <div class="comment-author-row">
        <span class="comment-author-name">
          <i class="ri-user-3-line" style="color: var(--primary-green);"></i> ${c.author}
        </span>
        <span class="comment-date">${c.date}</span>
      </div>
      <p class="comment-text">${c.text}</p>
      
      <div class="agent-replies-list">
        ${c.reply ? `
          <div class="agent-reply-bubble">
            <div class="agent-reply-header">
              <span><i class="ri-reply-fill"></i> Agent Response (You)</span>
              <span>${c.replyDate || 'Recently'}</span>
            </div>
            <div class="agent-reply-text">${c.reply}</div>
          </div>
        ` : `
          <div style="font-size: 0.78rem; color: #94a3b8; font-style: italic;">No reply sent yet.</div>
        `}
      </div>

      <form class="comment-reply-form" onsubmit="handleSendCommentReply(event, '${c.id}')">
        <input type="text" class="comment-reply-input" id="reply-input-${c.id}" placeholder="${c.reply ? 'Update your reply...' : 'Type your reply as Agent...'}" required>
        <button type="submit" class="btn btn-primary btn-sm">
          <i class="ri-send-plane-fill"></i> Reply
        </button>
      </form>
    </div>
  `).join('');
}

function handleSendCommentReply(e, commentId) {
  e.preventDefault();
  const input = document.getElementById(`reply-input-${commentId}`);
  const text = input.value.trim();
  if (!text) return;

  const success = replyToListingComment(currentActiveListingId, commentId, text);
  if (success) {
    if (typeof showToast === 'function') {
      showToast("Reply published successfully!");
    } else if (typeof showToastNotification === 'function') {
      showToastNotification("Reply published successfully!", "success");
    }
    const listings = getStoredListings();
    const listing = listings.find(l => l.id === currentActiveListingId);
    renderModalComments(listing);
  }
}

function closeCommentModal() {
  const modal = document.getElementById('commentReplyModal');
  if (modal) modal.classList.remove('active');
}

// Setup Media Uploaders (Images & Video with 1 min check)
function setupMediaUploaders() {
  const imageInput = document.getElementById('listingImagesInput');
  const imageDropzone = document.getElementById('imageDropzone');
  const imagePreviewGrid = document.getElementById('imagePreviewGrid');

  const videoInput = document.getElementById('listingVideoInput');
  const videoDropzone = document.getElementById('videoDropzone');
  const videoPreviewBox = document.getElementById('videoPreviewBox');

  // Image Upload Handling
  if (imageDropzone && imageInput) {
    imageDropzone.addEventListener('click', () => imageInput.click());

    ['dragover', 'dragenter'].forEach(eventName => {
      imageDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        imageDropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      imageDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        imageDropzone.classList.remove('dragover');
      });
    });

    imageDropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleImageFiles(e.dataTransfer.files, imagePreviewGrid);
      }
    });

    imageInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleImageFiles(e.target.files, imagePreviewGrid);
      }
    });
  }

  // Video Upload Handling (Max 1 min per spec)
  if (videoDropzone && videoInput) {
    videoDropzone.addEventListener('click', () => videoInput.click());

    videoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        validateAndPreviewVideo(file, videoPreviewBox);
      }
    });
  }
}

function handleImageFiles(files, container) {
  if (!container) return;
  Array.from(files).forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const div = document.createElement('div');
        div.className = 'preview-item';
        div.innerHTML = `
          <img src="${e.target.result}" alt="Listing photo preview" />
          <button type="button" class="preview-remove-btn" onclick="this.parentElement.remove()" title="Remove photo">
            <i class="ri-close-line"></i>
          </button>
        `;
        container.appendChild(div);
      };
      reader.readAsDataURL(file);
    }
  });
  showToast('Image(s) added to preview gallery');
}

function validateAndPreviewVideo(file, container) {
  if (!container) return;
  if (!file.type.startsWith('video/')) {
    showToast('Please select a valid video file (.mp4, .mov)', 'warning');
    return;
  }

  const url = URL.createObjectURL(file);
  const tempVideo = document.createElement('video');
  tempVideo.preload = 'metadata';
  tempVideo.src = url;

  tempVideo.onloadedmetadata = () => {
    window.URL.revokeObjectURL(tempVideo.src);
    const duration = tempVideo.duration; // in seconds
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (duration > 65) { // allow a few grace seconds
      showToast(`Video is ${formattedDuration} long. Specification requires Max 1 min!`, 'warning');
      container.innerHTML = `
        <div style="padding: 12px; border-radius: 8px; background: var(--status-danger-bg); color: var(--status-danger); font-size: 0.88rem; display: flex; align-items: center; gap: 8px;">
          <i class="ri-error-warning-fill"></i>
          <span>Video exceeds 1 minute limit (${formattedDuration}). Please upload a shorter clip.</span>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="margin-top: 12px; background: #fff; padding: 12px; border-radius: 8px; border: 1px solid var(--light-gray); display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 36px; height: 36px; border-radius: 6px; background: rgba(0, 168, 90,0.12); color: var(--emerald-600); display: flex; align-items: center; justify-content: center;">
            <i class="ri-film-line" style="font-size: 1.25rem;"></i>
          </div>
          <div>
            <strong style="font-size: 0.88rem; color: var(--dark-slate);">${file.name}</strong>
            <div style="font-size: 0.78rem; color: var(--slate-400);">Duration: ${formattedDuration} &bull; ${(file.size / (1024*1024)).toFixed(1)} MB</div>
          </div>
        </div>
        <button type="button" class="btn btn-secondary btn-sm" onclick="this.closest('#videoPreviewBox').innerHTML=''" style="padding: 4px 8px;">
          <i class="ri-delete-bin-line text-danger"></i>
        </button>
      </div>
    `;
    showToast(`Video loaded (${formattedDuration}) - within 1 min limit!`);
  };
}
