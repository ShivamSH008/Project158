AFRAME.registerComponent("comics-posters", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function() {
    this.postersContainer = this.el;
    this.posters();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents()
  },
  handleMouseEnterEvents: function() {
    this.el.addEventListener("mouseenter", () =>{
      const id = this.el.getAttribute("id");
      const postersId = [
        "superman",
        "spiderman",
        "captain-aero",
        "outer-space",
      ];
      if(postersId.includes(id)){
        const postersContainer = document.querySelector("#posters-container");
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", { color:"#0000FF" });
      }
    });
  },
  handleMouseLeaveEvents: function() {
    this.el.addEventListener("mouseleave", () => {
      const id = this.el.getAttribute("id");
      const postersId = [
        "superman",
        "spiderman",
        "captain-aero",
        "outer-space",
      ];
      if (postersId.includes(id)) {
        const postersContainer = document.querySelector("#posters-container");
        postersContainer.setAttribute("cursor-listener", { selectedItemId: "" });
        this.el.setAttribute("material", { color: "#0077CC" });
      }
    });
  },
  posters: function() {
    const postersRef = [
      {
        id: "superman",
        url: "./assets/posters/superman-poster.jpg"
      },
      {
        id: "spiderman",
        url: "./assets/posters/spiderman-poster.jpg"
      },
      {
        id: "captain-aero",
        url: "./assets/posters/captain-aero-poster.jpg"
      },
      {
        id: "outer-space",
        url: "./assets/posters/outer-space-poster.jpg"
      }
    ];
    let previousXPosition = -60;

    for (var item of postersRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Poster Element
      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });

    return entityEl;
  },

  createPoster: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  }
});