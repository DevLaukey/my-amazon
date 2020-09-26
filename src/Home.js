import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images.unsplash.com/photo-1542039375-28138150cc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
          alt="pic"
        />
        <div className="home_row">
          <Product
            title="I-phone X5"
            price={30000}
            image="https://images.unsplash.com/photo-1574315042617-f84e1847848a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            rating={3}
          />
          <Product
            title="Classy leather Watch"
            price={3000}
            image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title="Mac Laptop"
            price={150700}
            image="https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            rating={5}
          />
          <Product
            title="Black I-phone 6+"
            price={50000}
            image="https://images.unsplash.com/photo-1511140973288-19bf21d7e771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            rating={5}
          />
          <Product
            title="Canon Printer"
            price={7000}
            image="https://images.unsplash.com/photo-1551781079-6e588ca249f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            title="21 inches MacBook Pro "
            price={73000}
            image="https://www.telegraph.co.uk/content/dam/black-friday/2016/11/23/macbookairgetty_trans_NvBQzQNjv4BqjJeHvIwLm2xPr27m7LF8me0Jyi0jPPD6Zx1hiwTPhlc.jpg?imwidth=1400"
            rating={5}
          />
          <Product
            title="43 inch LED Smart TV"
            price={53000}
            image="https://5.imimg.com/data5/BC/BG/BG/ANDROID-47616313/product-jpeg-500x500.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title="Biggest beats pill"
            price={5300}
            image="https://lh3.googleusercontent.com/proxy/aytmuiR0v5XECt7icTZ76uUZYN04sZz4NU457x5pp8N6FtmRO1uPbV4qoiu8TUjE-vsHdVtJ1H5W_43zCuScPvLsoaHtBxkfJtv1v85SHI8qCkXJPF6yoV-3r7UqBX6EblveAm2A"
            rating={3}
          />
          <Product
            title="Beats Solo Pro Wireless Noise Canceling Headphones"
            price={37800}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mrj62-vid2_PF1_FMT_WHH?wid=1334&hei=780&fmt=jpeg&qlt=80&op_sharpen=1&op_usm=0.5,0.5&.v=1573169498038"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            title="Desktop Mac pc"
            price={100000}
            image="https://images.unsplash.com/photo-1558710183-63bf74dae824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
