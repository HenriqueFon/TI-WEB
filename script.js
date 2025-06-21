fetch("data/users.json")
  .then((res) => res.json())
  .then((user) => {
    const storedUsername = localStorage.getItem("userName");
    document.getElementById("username").textContent = storedUsername ? storedUsername : user.username;

    const storedAvatar = localStorage.getItem("userAvatar");
    document.getElementById("avatar").src = storedAvatar ? storedAvatar : user.avatar;

    const storedBio = localStorage.getItem("userBio");
    const bio = document.getElementById("bio");
    bio.textContent = storedBio ? storedBio : user.bio;

    const reviewsList = document.getElementById("reviews-list");
    user.reviews.forEach((review) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${review.game}</strong> - Nota: ${review.rating}/5<br>${review.comment}`;
      reviewsList.appendChild(li);
    });
  })
  .catch((err) => {
    console.error("Erro ao carregar perfil:", err);
  });

// Editar Bio
const editBtn = document.getElementById("edit-btn");
const saveBtn = document.getElementById("save-btn");
const bio = document.getElementById("bio");
const bioEditor = document.getElementById("bio-editor");

editBtn.addEventListener("click", () => {
  bioEditor.value = bio.textContent;
  bio.style.display = "none";
  bioEditor.style.display = "block";
  editBtn.style.display = "none";
  saveBtn.style.display = "inline";
});

saveBtn.addEventListener("click", () => {
  const newBio = bioEditor.value.trim();
  if (newBio) {
    bio.textContent = newBio;
    localStorage.setItem("userBio", newBio);
  }
  bio.style.display = "block";
  bioEditor.style.display = "none";
  editBtn.style.display = "inline";
  saveBtn.style.display = "none";
});

// Editar Avatar
const avatar = document.getElementById("avatar");
const editAvatarBtn = document.getElementById("edit-avatar-btn");
const saveAvatarBtn = document.getElementById("save-avatar-btn");
const avatarUrlInput = document.getElementById("avatar-url");

editAvatarBtn.addEventListener("click", () => {
  avatarUrlInput.style.display = "block";
  saveAvatarBtn.style.display = "inline";
  editAvatarBtn.style.display = "none";
});

saveAvatarBtn.addEventListener("click", () => {
  const newUrl = avatarUrlInput.value.trim();
  if (newUrl) {
    avatar.src = newUrl;
    localStorage.setItem("userAvatar", newUrl);
  }
  avatarUrlInput.style.display = "none";
  saveAvatarBtn.style.display = "none";
  editAvatarBtn.style.display = "inline";
});

// Editar Banner
const banner = document.getElementById("banner");
const editBannerBtn = document.getElementById("edit-banner-btn");
const saveBannerBtn = document.getElementById("save-banner-btn");
const bannerUrlInput = document.getElementById("banner-url");

const storedBanner = localStorage.getItem("userBanner");
if (storedBanner) {
  banner.style.backgroundImage = `url('${storedBanner}')`;
}

editBannerBtn.addEventListener("click", () => {
  bannerUrlInput.style.display = "block";
  saveBannerBtn.style.display = "inline";
  editBannerBtn.style.display = "none";
});

saveBannerBtn.addEventListener("click", () => {
  const newUrl = bannerUrlInput.value.trim();
  if (newUrl) {
    banner.style.backgroundImage = `url('${newUrl}')`;
    localStorage.setItem("userBanner", newUrl);
  }
  bannerUrlInput.style.display = "none";
  saveBannerBtn.style.display = "none";
  editBannerBtn.style.display = "inline";
});

// Editar Nome
const username = document.getElementById("username");
const usernameInput = document.getElementById("username-input");
const editUsernameBtn = document.getElementById("edit-username-btn");
const saveUsernameBtn = document.getElementById("save-username-btn");

editUsernameBtn.addEventListener("click", () => {
  usernameInput.value = username.textContent;
  username.style.display = "none";
  usernameInput.style.display = "block";
  saveUsernameBtn.style.display = "inline";
  editUsernameBtn.style.display = "none";
});

saveUsernameBtn.addEventListener("click", () => {
  const newName = usernameInput.value.trim();
  if (newName) {
    username.textContent = newName;
    localStorage.setItem("userName", newName);
  }
  username.style.display = "block";
  usernameInput.style.display = "none";
  saveUsernameBtn.style.display = "none";
  editUsernameBtn.style.display = "inline";
});
