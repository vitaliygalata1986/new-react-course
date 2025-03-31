const HomePage = () => {
  return (
    <div className="mx-auto font-display">
      <h1 className="text-vitos dark:text-white">Hello</h1>
      <h2 className="text-emerald-700 dark:text-white">h2</h2>
      <iframe
        src="https://player.vimeo.com/video/76979871"
        className="mx-auto w-[300px] aspect-video transform-3d rotate-x-60 rotate-z-35"
      />
    </div>
  );
};

export default HomePage;

/*
  w-30 -> 1 еденица = 4px, в итоге будет 120px
  sm -> больше 640px
  lg -> больше 1024px
*/

/*
  В Tailwind mt-20 рассчитывается так:
  Число 20 — это множитель базовой единицы.
  Базовая единица в Tailwind — 0.25rem.
    В px:
      1rem = 16px (по умолчанию в браузерах).
      0.25rem = 4px.
      mt-20 = 20 * 4px = 80px.
  Таким образом, mt-20 эквивалентно margin-top: 80px.
*/

/*
  -1/3 - одна третья часть экрана
*/

/*
py-10 - padding top and bottom
*/

/*
md:flex-row - начиная от > 768px элементы будут располагаться в ряд
*/
