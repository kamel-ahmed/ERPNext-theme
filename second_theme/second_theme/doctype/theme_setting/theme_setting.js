// Copyright (c) 2026, kamel and contributors
// For license information, please see license.txt

frappe.ui.form.on("Theme Setting", {

    refresh(frm) {
        frm.toggle_display("section_break_kicf", !frm.doc.default_sidebar)
    },

    default_sidebar: function (frm) {
        frm.toggle_display("section_break_kicf", !frm.doc.default_sidebar)
    },

    after_save: function (frm) {
        setTimeout(() => frappe.ui.toolbar.clear_cache(), 700);
    },
});
