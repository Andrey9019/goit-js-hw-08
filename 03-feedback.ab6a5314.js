!function(){var e=document.querySelector(".feedback-form"),a=e.querySelector("input[name='email']"),t=e.querySelector("textarea[name='message']");e.addEventListener("input",(function(){!function(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))}({email:a.value,message:t.value})})),e.addEventListener("submit",(function(l){l.preventDefault(),console.log({email:a.value,message:t.value}),localStorage.removeItem("feedback-form-state"),e.reset()})),function(){var e=localStorage.getItem("feedback-form-state");if(e){var l,o,n=JSON.parse(e);a.value=null!==(l=n.email)&&void 0!==l?l:"",t.value=null!==(o=n.message)&&void 0!==o?o:""}}()}();
//# sourceMappingURL=03-feedback.ab6a5314.js.map
