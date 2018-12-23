console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Edgar X.!",
    icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/middle-finger-3-582191.png"
  });
});