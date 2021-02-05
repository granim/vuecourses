<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>  

<script>

export default {

  components: {
    // UserList: UserList
  },
  data() {
    return { 
      animatedBlock: false,
      dialogIsVisible: false, 
      paraVisible: false,
      users: false,
      enterInterval: null,
      leaveInterval: null,

      };
  },
  methods: {
    enterCancelled(el){
      console.log(el)
        clearInterval(this.enterInterval)
    },
    leaveCancelled(el){
      console.log(el)
      clearInterval(this.leaveInterval)
    },
        beforeEnter(el) {
          console.log('beforeEnter ', el)
          el.style.opacity = 0;
        }, 
        enter(el, done) {
          console.log("enter")
          let round = 1;
          this.enterInterval = setInterval(() => {
            el.style.opacity = round * .1;
            round++
            if(round > 10) {
              clearInterval(this.enterInterval);
              done();
            }
          },20)
         
        }, 
         afterEnter() {
          console.log('After Enter')
        },
        beforeLeave(el){
          console.log('beforeLeave', el)
          el.style.opacity = 1;
        },
        leave(el, done) {
          let round = 1;
          this.leaveInterval = setInterval(() => {
            el.style.opacity = 1 - round * .01;
            round++
            if(round > 100) {
              clearInterval(this.leaveInterval);
              done();
            }
          },20)
        },
       
      
      showUser() {
        this.users = true
      },
      hideUsers() {
        this.users = false
      },

    animateBlock() {
      this.animatedBlock = true
    },
    setParaVisible() {
      this.paraVisible = !this.paraVisible;
    },

    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 1s;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  transform: translateX(-150px);
}

.para-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.route-enter-from {
}

.route-enter-active {
  animation: slide-fade 0.4s ease-out;
}

.route-enter-to {
}

.route-leave-active {
  animation: slide-fade 0.4s ease-in;
}
/* .v-enter-active {
  transition: all 0.5s ease-out;
} */
/* 
.para-enter-active {
  animation: slide-fade 1s ease-out;
} */

/* .para-enter-to {
  /* opacity: 1;
  transform: translateY(0); 
} */

/* .para-leave-from {
   opacity: 1;
  transform: translateY(0); 
}

.para-leave-active {
   transition: all 0.5s ease-in; 
  animation: slide-fade 0.3s ease-in;
}

.para-leave-to {
  opacity: 0;
  transform: translateY(30px); 
} */

.fade-button-enter-from .fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.6s ease-in;
}

.fade-button-enter-to .fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>