fetch("data/users.json")
  .then((res) => res.json())
  .then((user) => {
    const username = localStorage.getItem("userName") || user.username;
    const avatar = localStorage.getItem("userAvatar") || user.avatar;
    const bio = localStorage.getItem("userBio") || user.bio;
    const banner = localStorage.getItem("userBanner");

    document.getElementById("username").textContent = username;
    document.getElementById("avatar").src = avatar;
    document.getElementById("bio").textContent = bio;

    if (banner) {
      document.getElementById("banner").style.backgroundImage = `url('${banner}')`;
    }
  })
  .catch((err) => console.error("Erro ao carregar perfil:", err));
