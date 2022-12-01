function includPage() {
    $("[include]").each((i, e) => {
        const url = $(e).attr("include")
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr("include")
            }
        })
    })
}
includPage()