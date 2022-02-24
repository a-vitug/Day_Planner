var saveBtn = $(".saveBtn");
var notes = $("textarea");

function save() {
//     notes.html("description");
// localStorage.content = notes.val();
// notes.html(localStorage.content);
$(".description").val("notes");
}

saveBtn.on("click", save);

