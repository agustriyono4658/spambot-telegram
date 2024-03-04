const { default: axios } = require("axios");

const text = "Your Location Has Been Detected";

const url =
  "https://api.telegram.org/bot7000400987:AAGDfRFKlJcMk9xKPx_2_uBKL5r4xxKhfIU/sendMessage?parse_mode=markdown&chat_id=7056068390&text=" +
  text;

async function pesan() {
  try {
    while (true) {
      await axios.get(url).then((respone) => {
        if (respone.status == 200) {
          console.log(respone);
        }
      });
    }
  } catch (error) {
    console.log("Fail");
    pesan();
  }
}

pesan();
pesan();
pesan();
pesan();
pesan();
pesan();
pesan();
pesan();
pesan();
pesan();
