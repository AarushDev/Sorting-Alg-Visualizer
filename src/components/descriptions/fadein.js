export default function fade() {
  window.onscroll = () => {
    if (window.scrollY >= 40) {
      document.getElementsByClassName("description")[0].style.opacity = 1;
    } else {
      document.getElementsByClassName("description")[0].style.opacity = 0;
    }
  };
}
