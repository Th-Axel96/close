import Image from "next/image";
// import Logo from "@src/assets/img/pexels-burak-karaduman-1549326.jpg";
// import img1 from "@src/assets/img/img1.jpg";




let styles = {
  title: "uppercase underline text-lg text-center py-10",
  template: "grid grid-cols-3",
  templateItem1: "flex flex-col bg-green-500",
  templateItem2: "flex flex-row bg-purple-500",
  button: "flex flex-row w-full justify-center py-10",
  cols3: "grid grid-cols-3"

};

const Content = () => {
  return (
    <>
      <h1 className={styles.title}>Hello Content!</h1>
      
      <div className={styles.template}>
        {/* COL 1 */}
        <div className={styles.templateItem1}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            laboriosam quas ex ducimus sequi repellendus deserunt. Veritatis
            cupiditate expedita, veniam reiciendis accusantium fugiat quasi
            dicta possimus, iure id earum ipsam. Pariatur quasi dolor aliquid,
            dolores recusandae, totam voluptates optio reiciendis quos
            laudantium magnam reprehenderit atque rerum itaque ut repudiandae
            facere! Distinctio veniam eaque repellendus eligendi, suscipit
            possimus nobis quisquam vero.
          </p>
          <div className={styles.button}>
            <button>Envoyer</button>
          </div>
        </div>
        {/* COL 2 */}
        <div className={styles.templateItem1}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            laboriosam quas ex ducimus sequi repellendus deserunt. Veritatis
            cupiditate expedita, veniam reiciendis accusantium fugiat quasi
            dicta possimus, iure id earum ipsam. Pariatur quasi dolor aliquid,
            dolores recusandae, totam voluptates optio reiciendis quos
            laudantium magnam reprehenderit atque rerum itaque ut repudiandae
            facere! Distinctio veniam eaque repellendus eligendi, suscipit
            possimus nobis quisquam vero.
          </p>
          {/* <Image src={img1} alt="Logo" /> */}
        </div>
        {/* COL 3 */}
        <div className={styles.templateItem2}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            laboriosam quas ex ducimus sequi repellendus deserunt. Veritatis
            cupiditate expedita, veniam reiciendis accusantium fugiat quasi
            dicta possimus, iure id earum ipsam. Pariatur quasi dolor aliquid,
            dolores recusandae, totam voluptates optio reiciendis quos
            laudantium magnam reprehenderit atque rerum itaque ut repudiandae
            facere! Distinctio veniam eaque repellendus eligendi, suscipit
            possimus nobis quisquam vero.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
