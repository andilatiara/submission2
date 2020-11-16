var webPush = require('web-push');

const vapidKeys = {
   "publicKey": "BHcsXVF803WDU5_OfKV-s60LfuM7gUMjihkU0jqFl8im34Jzh95XXZTQmJkDZmn_3-ReqEroHnAJpc5cTbEwwcQ",
   "privateKey": "cnfLKnH-yTqga36g1yTordBZchHcFDDxedcb4AQYTaM"
};


webPush.setVapidDetails(
   'mailto:andilatiara@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint":  "https://fcm.googleapis.com/fcm/send/fGqA7Pjy_Og:APA91bH-lZBzXwCNa6rBdrpelib5m3FiSg7bMr6cXTGN6fTRBzcT7Dhbc-b4WirzW1pl0RMeYROg5GvvQPLcaBU8tnyBvISYtV1z8XZnzYyUu6Ga7yUEOtyM_O7TdW9dAU6NMcvfWVh1",
   "keys": {
       "p256dh": "BKPdJmr2ob/6BPuqRV/fQoPsZ8VSJ0Jof9CEy0GM58ISekEbAeONWnhMAA3ZgDUU3k6fX9wGooSio1VTXHwJ5Ek=",
       "auth": "EYXhkFTXkGzUHadfRN7M8g=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
   gcmAPIKey: '682064884483',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);
