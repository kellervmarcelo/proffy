import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/33509703?s=460&u=ef7227833a341abf96f940ac76d52d0c00421e5b&v=4"
          alt="Marcelo Keller"
        />
        <div>
          <strong>Marcelo Keller</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis
        laoreet rutrum. In vulputate ultrices ex, sed cursus augue consequat
        vel. Duis gravida dictum velit id malesuada. Vivamus orci lorem, viverra
        vel interdum sit amet, finibus ut turpis. Sed posuere pretium eros.
        Aenean maximus sapien at sem hendrerit, a eleifend leo pharetra. Mauris
        consectetur, felis blandit sodales lacinia, augue diam tincidunt est, ut
        tristique augue massa ut urna.
      </p>

      <footer>
        <p>Preço/hora</p>
        <strong>R$ 80,00</strong>
        <button type="button">
          <img src={whatsappIcon} alt="entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
