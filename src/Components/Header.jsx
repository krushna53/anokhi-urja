export const Header = (props) => {
  return (
    <>
      <div>
        {props.data
          ? props.data.map((d, i) => (
              <div className="anokhiUrja-header gridspaceWithCenter" id="Home">
                <div key={`${d.name}-${i}`} className="anokhiUrja-logo">
                  <a href="#Home">
                    <img src={d.logo} alt="logo" />
                  </a>
                </div>

                <div className="anokhiUrja-navbar">
                  <ul>
                    {d.menuItems
                      ? d.menuItems.map((item) => {
                          return (
                            <li key={item.id}>
                              <a href={item.id}>{item.name}</a>
                            </li>
                          );
                        })
                      : "loading"}
                  </ul>
                </div>

                <div className="anokhiUrja-Con-button">
                  <button id="contact-popup">Contact Us</button>
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </>
  );
};
