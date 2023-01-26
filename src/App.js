import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var phones = {
    Flagship: [
      {
        phoneName: "Samsung Galaxy S22 Ultra ",
        phonePrice: "₹1,06,999",
        description:
          "The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen stroke feel as natural as ink on paper — and you can convert those hastily written ideas into legible text."
      },
      {
        phoneName: "iPhone 14 Pro",
        phonePrice: "₹1,22,999",
        description:
          "Highlighting the major new feature such as an always-on display with a new Dynamic Island, upgraded cameras with a 48-megapixel main lens, car crash detection and satellite connectivity for emergencies, the A16 Bionic chip for faster performance, and new Deep Purple and Space Black color options. Emergency SOS via Satellite is not launching until November, so the feature was not available for review at the time."
      }
    ],
    Midrange: [
      {
        phoneName: "Google Pixel 6a",
        phonePrice: "₹29,999",
        description:
          "Experience intuitiveness and enjoy seamless operation with smooth transition with the 5G-ready Google Pixel 6a that comes bundled with a myriad of innovative features. Powered by the Google Tensor processor built especially for Pixel enables you to experience seamless juggling and multitasking. Moreover, the powerful battery adapted into this phone gives enormous power to your phone allowing it to run for a prolonged period. Furthermore, with Face Unblur, Magic Eraser, Night Sight, and Real Tone features incorporated into this phone you can capture masterpieces and enjoy impeccable imagery."
      },
      {
        phoneName: "OnePlus Nord 2T",
        phonePrice: "₹28,999",
        description:
          "Nord 2T comes with the same slick 16.33cm (6.43”) 90 Hz FHD+ AMOLED display⁶ as Nord 2. It’s effortlessly smooth and has HDR10+ support to make your binging time on apps like Amazon Prime Video, Hulu and YouTube more colorful."
      }
    ],
    Budget: [
      {
        phoneName: "Realme 10",
        phonePrice: "₹13,999",
        description:
          "The Realme 10 comes with an attractive design, MediaTek Helio G99 SoC, a 5,000mAh battery, and more. Read our review to find out how good is the smartphone. The Realme 10 is a capable budget smartphone for casual gamers and entertainment lovers alike. The handset comes with a lovely screen and acceptable performance."
      },
      {
        phoneName: "Vivo T1",
        phonePrice: "₹15,990",
        description:
          "Vivo T1 5G is powered by Qualcomm Snapdragon 695 chipset along with LPDDR4x RAM and UFS 2.2 storage. Although the processor is ok for normal use it is not as powerful as 765G and that shows while gaming. BGMI which needs high-level and heavy graphics does not perform well on Vivo T1."
      }
    ]
  };

  var ranges = Object.keys(phones);
  var [recommendedPhoneCategory, setrecommendedPhoneCategory] = useState(
    "Flagship"
  );

  function categoryClickHandler(event) {
    var choosedCategory = event.target.innerText;
    setrecommendedPhoneCategory(choosedCategory);
  }

  return (
    <div className="App">
      <h1>Mobile Recommendation</h1>
      <h2>Select your preference.</h2>
      <ul className="list-non-bullet">
        {ranges.map((category) => {
          return (
            <li
              key={category}
              onClick={categoryClickHandler}
              className="category inline-list-item"
            >
              {category}
            </li>
          );
        })}
      </ul>
      <ul>
        {phones[recommendedPhoneCategory].map((phone) => {
          return (
            <li key={phone.phoneName} className="list-non-bullet phone">
              <h2>{phone.phoneName}</h2>
              <small>Price: {phone.phonePrice}</small>
              <p>{phone.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
