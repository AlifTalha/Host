$(document).ready(function () {
    // Render the skills items //
    const skill_items = [
        "Python", "JavaScript", "C++", "React", "Java",
        "Asp.Net", "HTML", "CSS", "Oracle", "Node.js",
        "Bootstrap", "Tailwind", "SQL", "PostgreSQL",
        "TypeScript", "Express","MySQL", "Microsoft SQL"
    ];

    let render_item = $("<div></div>").addClass("resume-content-skills-items");
    skill_items.map(item => {
        render_item.append(
            $("<div></div>")
                .addClass("badge text-dark mt-3")
                .css("background-color", "#FFD54F")
                .text(item)
        );
    });
    $(".resume-content-skills").append(render_item);

    // Render the languages items //
    const languages_items = [
        {lang: "Bangla", level_text: "Native or bilingual proficiency", level_percent: "100"},
        {lang: "English", level_text: "Full professional proficiency", level_percent: "70"},
        {lang: "Hinde", level_text: "Elementary proficiency", level_percent: "40"}
    ]

    let render_lang_item = $("<div></div>");
    languages_items.map(item => {
        render_lang_item.append(
            $("<div></div>").text(item.lang).addClass("lang-text"),
            $("<div></div>").addClass("progress mt-2 mb-2").append(
                $("<div></div>")
                    .addClass("progress-bar progress-bar-striped bg-warning text-dark fw-bold")
                    .css("width", item.level_percent.concat("%"))
                    .attr("aria-valuenow", item.level_percent)
                    .attr("aria-valuemin", "0")
                    .attr("aria-valuemax", "100")
                    .attr("role", "progressbar")
                    .attr("aria-label", item.lang)
                    .text(item.level_percent.concat("%"))
            )
        );
    });
    $(".resume-content-languages").append(render_lang_item);
});