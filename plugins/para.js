import gsap from 'gsap'

export class SmoothScroll {

  constructor(target, container) {
    this.target = document.querySelectorAll(target);
    this.container = document.querySelectorAll(container);
    if (this.container.length === 0) {
      this.container = this.target[0].parentNode;
    } else {
      this.container = this.container[0];
    }

    this.y               = 0;
    this.resizeRequest   = 1;
    this.scrollRequest   = 0;
    this.requestId       = null;
    this.html            = document.documentElement;
    this.body            = document.body;
    this.viewport        = document.createElement('div');
    this.scrollContainer = document.createElement('div');


    this.viewport.classList.add('viewport');
    this.scrollContainer.classList.add('viewport-scroll');
    this.event = new Event(window.parallax.scrollEvent);
    if (!this.body.classList.contains('smoothScroll')) {
      this.body.classList.add('smoothScroll');
    }
  }


  init() {
    var self = this;

    self.target.forEach(function (elem) {
      self.scrollContainer.appendChild(elem);
    });
    self.viewport.appendChild(self.scrollContainer);
    self.container.appendChild(self.viewport);
    self.load();
  }
  load() {
    var self = this;
    self.updateScroller(true);
    window.focus();
    window.addEventListener('resize', function () {
      self.onResize()
    });
    document.addEventListener("scroll", function () {
      self.onScroll()
    });
    setInterval(function () {
      if (self.scrollContainer.clientHeight !== self.body.clientHeight) {
        self.onResize()
      }
    }, 2000);
  }

  onScroll() {
    this.scrollRequest++;
    if (typeof (Event) === 'function') {
      var event = new CustomEvent('parallax.scrollStart');
    } else {
      var event = document.createEvent('Event');
      event.initEvent('parallax.scrollStart', true, true);
    }
    document.dispatchEvent(event);
    if (!this.requestId) {
      this.requestId = requestAnimationFrame(() => {
        this.updateScroller()
      })
    }
  }
  onResize() {
    parallax.vph = window.innerHeight;
    this.resizeRequest++;

    if (!this.requestId) {
      this.requestId = requestAnimationFrame(() => {
        this.updateScroller()
      })
    }
  }

  updateScroller(first) {
    var self    = this,
      resized = (this.resizeRequest > 0);

    if (first) {
      this.viewport.scrollTo(0, 0);
    }
    if (resized) {
      this.body.style.height = this.scrollContainer.clientHeight + "px";
      this.resizeRequest = 0;
    }
    window.apyScroll = (window.pageYOffset || this.html.scrollTop || this.body.scrollTop || 0);

    parallax.y += (window.apyScroll - parallax.y) * parallax.smooth;
    parallax.scrollPercent = (parallax.y + parallax.vph) / (parallax.vph) - 1;

    if (Math.abs(window.apyScroll - parallax.y) < 0.05 || resized) {
      parallax.y = window.apyScroll;
      this.scrollRequest = 0;
    }

    document.dispatchEvent(self.event);
    this.scrollContainer.style.transform = 'translate3d(0, -' + parallax.y + 'px , 0)';

    if (this.scrollRequest > 0) {
      this.requestId = requestAnimationFrame(() => {
        this.updateScroller()
      });
    } else {
      this.requestId = null;
    }
  }
}

export class ParallaxComponent {
  constructor(rules) {
    var self = this;
    if (typeof rules === 'boolean') {
      this.enabled = rules;
    } else {
      this.enabled = true;
      Object.keys(rules).forEach(rule => {
        if (!rules[rule]) {
          self.enabled = false;
        }
      });
    }
    this.rules = rules;
    window.parallax.enabled = this.enabled;
    if (this.enabled) {
      document.body.classList.add('parallax');
    } else {
      document.body.classList.add('noParallax');
    }
  }
}

export class Wow {

  constructor(target, className, margin, oneTime) {

    var observerOptions = {rootMargin: margin};
    oneTime = (typeof oneTime === 'undefined') ? true : oneTime;
    this.target = document.querySelectorAll(target);
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        }
        else if (!oneTime) {
          entry.target.classList.remove(className);
        }
      });
    }, observerOptions);

    if (!document.body.classList.contains('scrollAnimations')) {
      document.body.classList.add('scrollAnimations');
    }
  }

  load() {
    var self = this;
    this.target.forEach(element => {
      self.observer.observe(element);
    });
  }
}

export class numberslide {

  constructor(target, begin, stop, duration) {

    var observerOptions = {rootMargin: '50px 0px 0px 0px'};
    this.stop = stop
    this.begin = begin
    this.duration = duration
    this.valu = begin
    this.target = document.querySelectorAll(target);
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          gsap.fromTo(this,{valu: this.begin},{valu: this.stop,duration:this.duration})
        }
        else {
          this.valu = this.stop
        }
      });
    }, observerOptions);
  }

  load() {
    var self = this;
    this.target.forEach(element => {
      self.observer.observe(element);
    });
  }

  number() {
    return this.valu
  }
}

export class ParallaxMove {

  constructor(target, props, stage) {

    this.target = document.querySelectorAll(target);
    this.props = props;
    this.stage = stage;
    this.body  = document.body;
  }

  load() {
    var self = this;
    this.target.forEach(elem => {
      elem.param = {};
    });
    document.addEventListener(window.parallax.scrollEvent, () => self.updateScroller());
  }

  updateScroller() {
    var val;

    if (this.stage === true || this.stage === 'fixed') {
      if (window.parallax.scrollPercent < 1.5 || this.stage === 'fixed') {

        this.target.forEach(element => {

          if (element) {
            var elementParameters = {};

            for (let [prop, value] of Object.entries(this.props)) {
              if (isNaN(element.param[prop])) {
                element.param[prop] = 0
              }
              if(this.stage === 'fixed'){
                element.param[prop] =  window.parallax.y - value
              } else {
                element.param[prop] = window.parallax.scrollPercent * value[1] + value[0];
              }

              elementParameters = element.param;
            }

            if (typeof gsap !== 'undefined') {
              gsap.set(element, elementParameters);
            }
          }
        });
      }
    }


    else if (Array.isArray(this.stage)) {

      this.target.forEach(element => {
        if (element) {

          let zone              = element.getBoundingClientRect();
          let zoneHeight        = zone.height;
          let zoneTop           = zone.top;
          let elementParameters = {};
          let vpCalculation     = (window.parallax.vph - zoneTop) / (window.parallax.vph + zoneHeight);

          if (vpCalculation > -0.4 && vpCalculation < 1.4) {
            let parallaxCalculation = vpCalculation / (this.stage[0] + this.stage[1]);

            for (let [prop, value] of Object.entries(this.props)) {
              if (isNaN(element.param[prop])) {
                element.param[prop] = 0
              }

              if (this.stage[0] > vpCalculation) {
                val = value[0];
              } else if (this.stage[1] < vpCalculation) {
                val = value[1];
              } else {
                val = (parallaxCalculation * (value[1] - value[0]) + value[0])
              }

              element.param[prop] = val;

              elementParameters = element.param;
            }

            if (typeof gsap !== 'undefined') {
              gsap.set(element, elementParameters);
            }
          }
        }
      });
    }
  }
}
