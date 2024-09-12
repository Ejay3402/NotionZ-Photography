  
const meun_list = document.querySelector(`.meun-list`);

const tl = gsap.timeline({
  duration: 1,
});

//header logo
tl.fromTo(
  ".home",
  {
    opacity: 0,
    x: -500,
  },
  {
    duration: 1,
    opacity: 1,
    x: 0,
  }
)  //header logo 
.fromTo(
  ".header-logo",
  {
    opacity: 0,
    x: -200,
  },
  {
    duration: 1,
    opacity: 1,
    x: 0,
  }
) //menu list
.fromTo(
  ".open-meun",
  {
    opacity: 0,
    x: 200,
  },
  {
    duration: 1,
    opacity: 1,
    x: 0,
  }
) //menu list
  .fromTo(
    ".meun-list",
    {
      opacity: 0,
      x: 200,
    },
    {
      duration: 0.5,
      opacity: 1,
      x: 0,
      stagger: 0.6,
    }
  ) //hello 
  .fromTo(
    ".home-text",
    {
      opacity: 0,
      x: -500,
    },
    {
      duration: 1,
      opacity: 1,
      x: 0,
    }
  ) //tee sticks
  .fromTo(
    ".tee",
    {
      opacity: 0,
      y: -50,
    },
    {
      duration: 1,
      opacity: 1,
      y: 0,
    }
  ) //notion p
  .fromTo(
    ".np",
    {
      opacity: 0,
      y: -50,
    },
    {
      duration: 1,
      opacity: 1,
      y: 0,
    }
  )
  .fromTo(
    ".p",
    {
      opacity: 0,
      y: -50,
    },
    {
      duration: 1,
      opacity: 1,
      y: 0,
    }
  )
  .fromTo(
    ".btns",
    {
      opacity: 0,
      x: -500,
    },
    {
      duration: 1,
      opacity: 1,
      x: 0,
    }
  )