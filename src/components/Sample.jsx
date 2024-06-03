import { useEffect } from "react";

export default function Sample() {
  useEffect(() => {
    const buttons = document.querySelectorAll("button");

    // 各ボタンがクリックされたときのハンドリング
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((button) => {
          button.classList.remove("bg-[#E5E7EB]");
        });
        button.classList.add("bg-[#E5E7EB]");
      });
    });
  }, []);

  return (
    <ul id="tabs" className="list-none flex pl-0 gap-2 pb-8 flex-wrap">
      <li>
        <button className="px-4 py-1 bg-[#E5E7EB] rounded-full font-bold">
          すべて
        </button>
      </li>
      <li>
        <button className="px-4 py-1 rounded-full font-bold">
          プログラミング
        </button>
      </li>
      <li>
        <button className="px-4 py-1 rounded-full font-bold">デザイン</button>
      </li>
    </ul>
  );
}
