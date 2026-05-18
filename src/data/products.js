const products = [
  {
    id: 1,
    name: "Wirless Headphones",
    price: "150.00",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691485-711d030f7e94?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium wireless headphones with noiise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "249.99",
    image:
      "https://images.unsplash.com/photo-1637160151663-a410315e4e75?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Feature-rich smartwatch with fitness tracking.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: "109.99",
    image:
      "https://images.unsplash.com/photo-1629317480826-910f729d1709?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ergonamic aluminum laptop stand that improves posture.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: "55.50",
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Not-RGB cechanical keyboard with cherry MX switches.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: "20.99",
    image:
      "https://images.unsplash.com/photo-1616578781650-cd818fa41e57?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: "72.99",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Ergonamic wireless mouse with precision tracking and best sens. Best opcion for gaming performance.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
