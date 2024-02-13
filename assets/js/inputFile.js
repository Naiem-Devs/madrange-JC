$(function() {
    var countFiles = 1,
      $body = $('body'),
      typeFileArea = ['txt', 'doc', 'docx', 'ods'],
      coutnTypeFiles = typeFileArea.length;
  
    //create new element
    $body.on('click', '.files-wr label', function() {
      var wrapFiles = $('.files-wr'),
        newFileInput;
  
      countFiles = wrapFiles.data('count-files') + 1;
      wrapFiles.data('count-files', countFiles);
  
      newFileInput = '<div class="one-file"><label for="file-' + countFiles + '"><img src="assets/img/form-btn-1.png" alt=""></label>' +
        '<input type="file" name="file-' + countFiles + '" id="file-' + countFiles + '"><div class="file-item hide-btn">' +
        '<span class="file-name"></span><span class="btn btn-del-file">+</span></div></div>';
      wrapFiles.prepend(newFileInput);
    });
  
    //show text file and check type file
    $body.on('change', 'input[type="file"]', function() {
      var $this = $(this),
        valText = $this.val(),
        fileName = valText.split(/(\\|\/)/g).pop(),
        fileItem = $this.siblings('.file-item'),
        beginSlice = fileName.lastIndexOf('.') + 1,
        typeFile = fileName.slice(beginSlice);
  
      fileItem.find('.file-name').text(fileName);
      if (valText != '') {
        fileItem.removeClass('hide-btn');
  
        for (var i = 0; i < coutnTypeFiles; i++) {
  
          if (typeFile == typeFileArea[i]) {
            $this.parent().addClass('has-mach');
          }
        }
      } else {
        fileItem.addClass('hide-btn');
      }
  
      if (!$this.parent().hasClass('has-mach')) {
        $this.parent().addClass('error');
      }
    });
  
    //remove file
    $body.on('click', '.btn-del-file', function() {
      var elem = $(this).closest('.one-file');
      elem.fadeOut(400);
      setTimeout(function() {
        elem.remove();
      }, 400);
    });
  });


  $(function () {
    var countFiles = 2,
        $body = $('body'),
        typeFileArea = ['txt', 'doc', 'docx', 'ods'],
        coutnTypeFiles = typeFileArea.length;

    //create new element
    $body.on('click', '.files-wrt label', function () {
        var wrapFiles = $('.files-wrt'),
            newFileInput;

        countFiles = wrapFiles.data('count-files') + 1;
        wrapFiles.data('count-files', countFiles);

        newFileInput = '<div class="one-filet"><label for="file-' + countFiles +
            '"><img src="assets/img/form-btn-2.png" alt=""></label>' +
            '<input type="file" name="file-' + countFiles + '" id="file-' + countFiles +
            '"><div class="file-itemt hide-btnt">' +
            '<span class="file-namet"></span><span class="btn btn-del-filet">+</span></div></div>';
        wrapFiles.prepend(newFileInput);
    });

    //show text file and check type file
    $body.on('change', 'input[type="file"]', function () {
        var $this = $(this),
            valText = $this.val(),
            fileName = valText.split(/(\\|\/)/g).pop(),
            fileItem = $this.siblings('.file-itemt'),
            beginSlice = fileName.lastIndexOf('.') + 1,
            typeFile = fileName.slice(beginSlice);

        fileItem.find('.file-namet').text(fileName);
        if (valText != '') {
            fileItem.removeClass('hide-btnt');

            for (var i = 0; i < coutnTypeFiles; i++) {

                if (typeFile == typeFileArea[i]) {
                    $this.parent().addClass('has-macht');
                }
            }
        } else {
            fileItem.addClass('hide-btnt');
        }

        if (!$this.parent().hasClass('has-macht')) {
            $this.parent().addClass('errort');
        }
    });

    //remove file
    $body.on('click', '.btn-del-filet', function () {
        var elem = $(this).closest('.one-filet');
        elem.fadeOut(400);
        setTimeout(function () {
            elem.remove();
        }, 400);
    });
});