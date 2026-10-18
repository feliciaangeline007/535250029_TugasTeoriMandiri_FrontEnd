$(document).ready(function () {

    // Menampilkan tahun secara otomatis pada footer
    $('#current-year').text(new Date().getFullYear());

    // Menambah dan mengurangi jumlah suka pada menu
    $('.like-button').on('click', function () {
        const $button = $(this);
        const $count = $button.find('.like-count');
        let count = Number($count.text());

        if ($button.hasClass('liked')) {
            count--;
            $button.removeClass('liked');
            $button.html(
                '♡ Suka <span class="like-count">' + count + '</span>'
            );
        } else {
            count++;
            $button.addClass('liked');
            $button.html(
                '♥ Disukai <span class="like-count">' + count + '</span>'
            );
        }

        // Animasi sederhana menggunakan jQuery
        $button.hide().fadeIn(200);
    });

});