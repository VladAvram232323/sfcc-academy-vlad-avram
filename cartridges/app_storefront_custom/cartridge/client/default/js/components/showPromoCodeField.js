$("#promo-code-link").on("click", (e) => {
    e.preventDefault();
    $("#promo-code-wrapper").toggleClass("hidden").addClass("show");
    $("#promo-code-link").toggleClass("show").addClass("hidden");
});
