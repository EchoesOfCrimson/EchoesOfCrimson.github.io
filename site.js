/* ══════════════════════════════════════════════════════════════════
   ECHOES OF CRIMSON — SITE SETTINGS

   THIS IS THE ONLY FILE YOU NEED TO EDIT.
   Change the values below and every page updates itself.

   Don't delete the quote marks. Don't delete the commas.
   ══════════════════════════════════════════════════════════════════ */

var SITE = {

  /* ── THE KICKSTARTER ──────────────────────────────────────────────
     Leave this as "" (empty) until the campaign is live.
     While it's empty, every button says "Notify me" and points at
     the email form.
     The moment you paste your real link in here, every button on
     every page turns into "Back the film" and points at Kickstarter.
     ───────────────────────────────────────────────────────────────── */
  kickstarterUrl: "",

  /* ── THE DATE ─────────────────────────────────────────────────────
     big  = the huge word on the homepage
     line = how it reads inside a sentence
     e.g.  big: "August 5"   line: "on 5 August"
           big: "Now"        line: "right now"
     ───────────────────────────────────────────────────────────────── */
  launchBig:  "Now",
  launchLine: "right now",

  /* ── SOCIALS ──────────────────────────────────────────────────────
     Paste full links. Leave "" and the icon simply won't appear.
     ───────────────────────────────────────────────────────────────── */
  socials: {
    instagram: "",
    tiktok:    "",
    youtube:   "",
    facebook:  "",
    x:         ""
  },

  /* ── THE EMAIL FORM ───────────────────────────────────────────────
     Paste your MailerLite form ACTION URL here. To find it:
       Subscribers > Groups > create a group
       Forms > Embedded forms > Create form > pick that group
       Done editing > Overview > "Embed form into your website"
       > HTML code tab > find action="..." and copy the URL

     It looks like this (yours will have different numbers):
       https://assets.mailerlite.com/jsonp/849572/forms/1234567890/subscribe

     UNTIL YOU PASTE IT, THE FORM SAVES NOTHING AND SAYS SO.
     ───────────────────────────────────────────────────────────────── */
  formAction: "https://assets.mailerlite.com/jsonp/2516371/forms/193341521082189193/subscribe"

};


/* ══════════════════════════════════════════════════════════════════
   Below this line is machinery. You don't need to touch it.
   ══════════════════════════════════════════════════════════════════ */
(function(){
  var live = !!(SITE.kickstarterUrl && SITE.kickstarterUrl.trim());

  // date
  document.querySelectorAll('[data-launch-big]').forEach(function(el){ el.textContent = SITE.launchBig; });
  document.querySelectorAll('[data-launch-line]').forEach(function(el){ el.textContent = SITE.launchLine; });

  // every kickstarter button, everywhere
  document.querySelectorAll('[data-ks]').forEach(function(el){
    if(live){
      el.setAttribute('href', SITE.kickstarterUrl);
      el.setAttribute('target','_blank');
      el.setAttribute('rel','noopener');
      el.textContent = el.dataset.ks === 'long' ? 'Back the film on Kickstarter' : 'Back the film';
    }else{
      el.setAttribute('href', el.dataset.ksFallback || '#notify');
      el.removeAttribute('target');
      el.textContent = el.dataset.ks === 'long' ? 'Get the launch alert' : 'Notify me';
    }
  });

  // "live now" vs "coming" copy
  document.querySelectorAll('[data-when-live]').forEach(function(el){ el.hidden = !live; });
  document.querySelectorAll('[data-when-pending]').forEach(function(el){ el.hidden = live; });

  // socials — hide the ones with no link
  var icons = {
    instagram:'<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.8-2.2 1.4C1.3 2.7.9 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.2 2.2.5 3 .3.8.8 1.5 1.4 2.2.7.6 1.4 1.1 2.2 1.4.8.3 1.7.5 3 .5 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.2 3-.5.8-.3 1.5-.8 2.2-1.4.6-.7 1.1-1.4 1.4-2.2.3-.8.5-1.7.5-3 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.2-.5-3-.3-.8-.8-1.5-1.4-2.2-.7-.6-1.4-1.1-2.2-1.4-.8-.3-1.7-.5-3-.5C15.7 0 15.3 0 12 0z"/><path d="M12 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zm0 10.2a4 4 0 110-8 4 4 0 010 8z"/><circle cx="18.4" cy="5.6" r="1.4"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24"><path d="M16.6 5.8a5 5 0 01-1-3.3h-3.3v13.2a2.9 2.9 0 11-2.1-2.8v-3.4a6.2 6.2 0 105.4 6.2V9.4a8.2 8.2 0 004.8 1.5V7.6a4.9 4.9 0 01-3.8-1.8z"/></svg>',
    youtube:'<svg viewBox="0 0 24 24"><path d="M23.5 6.5a3 3 0 00-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 00.5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.6 24 12 24 12s0-3.6-.5-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>',
    facebook:'<svg viewBox="0 0 24 24"><path d="M24 12a12 12 0 10-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0024 12z"/></svg>',
    x:'<svg viewBox="0 0 24 24"><path d="M18.9 2H22l-7 8 8.3 12h-6.5l-5-7.3L5.9 22H2.7l7.5-8.6L2.2 2h6.6l4.6 6.7L18.9 2zm-1.1 18h1.8L7.3 3.9H5.4L17.8 20z"/></svg>'
  };
  document.querySelectorAll('[data-social]').forEach(function(li){
    var k = li.dataset.social, url = SITE.socials[k];
    if(!url){ li.classList.add('off'); return; }
    li.innerHTML = '<a href="'+url+'" target="_blank" rel="noopener" aria-label="'+k+'">'+icons[k]+'</a>';
  });

  // form -> MailerLite, posted into a hidden frame so we never leave the page
  var form = document.getElementById('form');
  if(form){
    var said  = document.getElementById('said'),
        email = document.getElementById('email');

    if(SITE.formAction){
      form.setAttribute('action', SITE.formAction);
      form.setAttribute('method', 'post');
      form.setAttribute('target', 'ml-sink');
    }

    form.addEventListener('submit', function(e){
      var v = email.value.trim();

      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){
        e.preventDefault();
        said.textContent = 'That email doesn\u2019t look right \u2014 check it and try again.';
        email.focus();
        return;
      }

      if(!SITE.formAction){
        e.preventDefault();
        said.textContent = 'NOT CONNECTED \u2014 add formAction in site.js or this address is lost.';
        console.warn('[Echoes of Crimson] No formAction set in site.js. This signup was NOT saved.');
        return;
      }

      // let the real post through to the hidden frame
      said.textContent = 'You\u2019re on the list. We\u2019ll write when it matters.';
      setTimeout(function(){ form.reset(); }, 400);
    });
  }

  // ── drag-to-compare slider (the homepage title) ────────────────────
  var split  = document.getElementById('split');
  var handle = document.getElementById('handle');
  if(split){
    var apply = function(pct){
      pct = Math.max(3, Math.min(97, pct));          // keep a sliver of each cut
      split.style.setProperty('--pos', pct + '%');   // drives the reveal + effects
      if(handle){ handle.style.left = pct + '%'; }    // handle follows the cursor
      split.setAttribute('aria-valuenow', Math.round(pct));
    };
    var fromX = function(clientX){
      var r = split.getBoundingClientRect();
      apply(((clientX - r.left) / r.width) * 100);
    };
    var dragging = false;
    split.addEventListener('pointerdown', function(e){
      dragging = true;
      if(split.setPointerCapture){ try{ split.setPointerCapture(e.pointerId); }catch(_){} }
      fromX(e.clientX);
    });
    split.addEventListener('pointermove', function(e){ if(dragging){ fromX(e.clientX); } });
    split.addEventListener('pointerup',     function(){ dragging = false; });
    split.addEventListener('pointercancel', function(){ dragging = false; });
    // it is a real slider, so arrow keys work too
    split.addEventListener('keydown', function(e){
      var now = parseFloat(split.getAttribute('aria-valuenow')) || 50;
      if(e.key === 'ArrowLeft'){  apply(now - 3); e.preventDefault(); }
      if(e.key === 'ArrowRight'){ apply(now + 3); e.preventDefault(); }
    });
    apply(50); // start in the middle
  }

})();
