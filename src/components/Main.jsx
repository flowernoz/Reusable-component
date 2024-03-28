import "./main.css";
function Main({item, index}) {
    return <section  className="main">
            <div className="boxi">
                <img src={item.img} alt="" />
            </div>
            <div className="boxt">
                <h1>{index+1+'. ' + item.title}</h1>
                <p>{item.describe}</p>
                <button>Learn more</button>
            </div>
  </section>;
}

export default Main;
