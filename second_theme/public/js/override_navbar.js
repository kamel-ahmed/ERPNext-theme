// 
$(document).ready(async function () {

    const show_help_icon = await frappe.db.get_single_value("Theme Setting", "show_help_icon")
    const apply_to_navebar = await frappe.db.get_single_value("Theme Setting", "apply_navbar")
    const theme_color = await frappe.db.get_single_value("Theme Setting", "theme_color");
    const theme_logo = await frappe.db.get_single_value("Theme Setting", "theme_logo");
    const favicon_img = await frappe.db.get_single_value("Theme Setting", "favicon");

    console.log(theme_logo);
    theme_logo ?
        document.querySelector(".navbar .navbar-brand ").innerHTML =
            `<img src="${theme_logo}" alt="Logo" style="width:35px ; height:35px" >`
        :
        (
            favicon_img ? 
            document.querySelector(".navbar .navbar-brand ").innerHTML =
            `<img src="${favicon_img}" alt="favicon logo" style="width:35px ; height:35px" >`
            :
            null
        )


    show_help_icon ? null : document.querySelector(".dropdown-help").innerHTML = ""

    if (apply_to_navebar) {
        // color gradient 

        if (theme_color === "Blue") {
            let theme_color2 = "#c9e7fc"
            document.querySelector(".navbar").style.backgroundColor = theme_color2
        } else if (theme_color === "Green") {
            let theme_color2 = "#c3d48b"
            document.querySelector(".navbar").style.backgroundColor = theme_color2
        } else if (theme_color === "Yellow") {
            let theme_color2 = "#f1e981"
            document.querySelector(".navbar").style.backgroundColor = theme_color2
        } else if (theme_color === "Red") {
            let theme_color2 = "#f9c6c6"
            document.querySelector(".navbar").style.backgroundColor = theme_color2
        } else if (theme_color === "Default") {
            let theme_color2 = "#bebebe"
            document.querySelector(".navbar").style.backgroundColor = theme_color2
        }

    } else {
        document.querySelector(".navbar").style.border = "0.5px solid lightgray"
    }


});
