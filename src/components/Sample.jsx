import { useEffect } from "react";

export default function Sample() {
  useEffect(() => {
    const buttons = document.querySelectorAll("button");

    // 各ボタンがクリックされたときのハンドリング
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((button) => {
          button.classList.remove("bg-[#333333]");
          button.classList.remove("text-white");
        });
        button.classList.add("bg-[#333333]");
        button.classList.add("text-white");
      });
    });
  }, []);

  return (
    <ul id="tabs" className="list-none flex pl-0 gap-2 pb-8 flex-wrap">
      <li>
        <button className="px-4 py-1 bg-[#333333] rounded-full font-bold text-white">
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
