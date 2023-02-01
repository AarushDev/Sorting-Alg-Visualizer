import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/AarushDev/Sorting-Alg-Visualizer"
        target={"_blank"}
      >
        <AiFillGithub size={35} color={"#332D2D"} />
      </a>
      <h6>Copyright &copy; Aarush Khurana 2023</h6>
    </footer>
  );
}
