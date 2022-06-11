export const Banner = (props) => {
  const mystyle = {
    backgroundImage: "url('../Images/newBanner.jpg')",
  }
  return (
    <>
      <div className="commonWidth anokhiUrja-banner" style={mystyle}>
        {props.data
          ? props.data.map((d, i) => (
            <div key={`${d.name}-${i}`} className='anokhiUrja-paragraph'>
                <h1 class="commonTitleFontSize" id="bannertitel">{d.title}</h1>
                <p>{d.subheading}</p>
                <div className='anokhiUrja-Con-button btn-box'>
                <a href="#Home" class="btn-1"><button>Know More</button></a>
                </div>
            </div>
          )) : "loading"}
      </div>
    </>
  );
};
