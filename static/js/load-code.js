(() => {
  const { Prism, PerfectScrollbar } = window;

  jQuery.fn.selectText = function(){
    var doc = document;
    var element = this[0];
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();        
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
  };

  $('.js-area-code > pre').each(function () {
    const ps = new PerfectScrollbar($(this)[0], {
      wheelSpeed: 1.2
    });
  });

  $('.btn-copy').on('click', function(e) {
    var selector = $(this).data('selector');
    $(selector).selectText();
    document.execCommand("copy");
    $(this).text('Copied').removeClass('btn-default').addClass('btn-success');
    setTimeout(function() { $('.btn-copy').text("Copy").removeClass('btn-success').addClass('btn-default'); }, 1000);
    e.preventDefault();
  });
  $('.js-single-src').each(function () {
    const $src = $(this);
    const filename = $src.children('.js-filename-code').attr('value');
    let lang = 'cpp';
    if (filename && filename.split('.').length > 0) {
      lang = filename.split('.')[1];
    }

    $.get(`https://spoj-solution.github.io/solution/src/${filename}`, (code) => {
      const highlightCode = Prism.highlight(code, Prism.languages[lang]);
      $src.find('.js-source-code')
        .addClass(`language-${lang}`)
        .html(highlightCode);
    });

    $src.find('.js-toggle-code').click(function () {
      $src.children('.js-area-code').slideToggle(500, 'linear');
      const $this = $(this);
      if ($this.attr('data-visible') == '1') {
        $this.attr('data-visible', '0');
        $this.children('span.text').text('Show');
        $this.children('i.fa').removeClass('fa-eye-slash').addClass('fa-eye');
      } else {
        $this.attr('data-visible', '1');
        $this.children('span.text').text('Hide');
        $this.children('i.fa').removeClass('fa-eye').addClass('fa-eye-slash');
      }
    });
  });

})();
