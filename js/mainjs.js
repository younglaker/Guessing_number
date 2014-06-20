$(document).ready(function() {

	// 全局变量
	var globel = {
		'win_width': $('body').width(),
		'win_height': $('body').height(),
		'curr_nav_a': '',
		'is_slide_down': false
	}
	globel.curr_nav_a = $('.charge-nav')
							.closest('.charge-nav')
							.find('a.act');

	/*
	 * 关闭广告
	 */
	$('.cancel-ad').click(function(){
		$(this).closest('.ad-full-block').slideUp(500);
	});

	/*
	 * 导航下拉菜单
	 */
	// 设置当前页面的导航菜单的样式
	globel.curr_nav_a
		.children('.charge-nav-ico')
		.css({'background-position-x': '-43px'});


	// 点击导航菜单的“更多”
	$('.charge-nav-more').closest('li').click(function(){
		var $more_li = $(this),
			nav_down_block = $('.charge-nav-down-block'),
			nav_more_down = $('.charge-nav-more-down');

		globel.curr_nav_a
			.removeClass('act')
			.children('.charge-nav-ico')
			.css({'background-position-x': '0'});

		$more_li
			.closest('li')
			.find('a')
			.addClass('act')
			.children('.charge-nav-ico')
			.css({'background-position-x': '-43px'});
		
		if (!globel.is_slide_down) { // 执行菜单下滑
			nav_more_down.css({'background-position-x': '-28px'});
			nav_down_block.animate({'top': '66px'}, 500);
			globel.is_slide_down = true;
			$('.shadow-block').show();
		} else { //执行菜单上滑
			nav_more_down.css({'background-position-x': '0'});
			nav_down_block.animate({'top': '-78px'}, 500);
			$('.shadow-block').hide();
			globel.is_slide_down = false;

			$more_li.find('a.act')
				.removeClass('act')
				.children('.charge-nav-ico')
				.css({'background-position-x': '0'});

			globel.curr_nav_a
				.addClass('act')
				.children('.charge-nav-ico')
				.css({'background-position-x': '-43px'});
		}
		return false;
	});

	/*
	 * 填写手机号码
	 */
	$('.charge-phone-num').focus();

	// 手动输入手机号
	$('#charge-phone-num').on('keyup change', function() {
		var $input = $(this),
			val = $input.val(),
			num = val.replace(/\D/g, '').match(/\d+/g),
			num_str, length, result;
		$('.charge-location').text('');

		if (val == '') { // 防空
			return false;
		} else {
			$('.charge-phone-num-block button').remove();
			$('.charge-phone-num-block')
				.append('<button class="cancel-phone-num"></button>');
		}
		if (num == null) { // 防非数字
			$input.val('');
			$('.charge-phone-num-block button').remove();
			$('.charge-phone-num-block')
				.append('<button class="choose-phone-num"></button>');
			return false;
		}

		num_str = num.join('').toString();
		length = num_str.length;
		result = num_str;

		if (length > 3) {
			result = num_str.substr(0, 3) + '-' + num_str.substr(3);
		}
		if (length > 7) {
			result = result.substr(0, 8) + '-' + num_str.substr(7);
		}
		if (length >= 11) {
			result = result.substr(0, 13);
			$('.charge-location').text('归属地：广州广东移动'); // 此处应由Ajax获取归属地
		}

		$input.val(result);
		$('#charge-phone-num-bk').val(parseInt(num_str));
	});

	// 选取下拉表的好吗（实际号码列表应由Ajax获取）
	$('.charge-phone-num-block').on('click', '.choose-phone-num', function() {
		$('.num-list')
			.toggle()
			.on('click', 'li', function() {
				var val = $(this).text();
				$('#charge-phone-num').val(val);
				$('#charge-phone-num-bk').val(val.replace(/\D/g, '').match(/\d+/g));
				$('.num-list').hide();
				$('.charge-phone-num-block btton').remove();
				$('.charge-phone-num-block')
					.append('<button class="cancel-phone-num"></button>');
				input_test();
			});
		return false;
	});

	// 清空填写号码的input
	$('.charge-phone-num-block').on('click', '.cancel-phone-num', function() {
		$('#charge-phone-num').val('');
		$('#charge-phone-num-bk').val('');
		$('.charge-phone-num-block btton').remove();
		$('.charge-phone-num-block')
			.append('<button class="choose-phone-num"></button>');
		return false;
	});

	$('#charge-phone-num').on('blur change', function(){
		input_test();
	});

    $('html').click(function() {
		$('.num-list').hide();
    });

	/*
	 * 选取充值数
	 */
	$('.charge-price-items').on('click', 'li', function() {
		var $t = $(this);
			price = $t.text().match(/\d+/)[0],
			privilege_price_low = price - 0.5, // 此处价格范围需要改为Ajax获取后台价格
			privilege_price_high= price - 0.2;
		$t.closest('form').find('.charge-price-items li').removeClass('act');
		$t.addClass('act');
		$('#charge-input-price').val(price);
		$('.charge-price > span').text('￥' + privilege_price_low + '-' + privilege_price_high);
	});

	/*
	 * 表单检测
	 */
	// 点击提交按钮时检测
	$('#charge-form').submit(function() {
		var qualified = input_test();
		if (!qualified) {
			return false;
		}
	});

	// 检测手机号码位数正确性
	function input_test() {
		var num = $('#charge-phone-num-bk').val(),
			$input = $('#charge-phone-num'),
			num_len;

		if (num == null) {
			input_error($input);
			return false;	
		}

		num_len = num.toString().length;
		if (num_len < 11) {
			input_error($input);
			return false;
		}
		input_correct($input);
		return true;
	}

	function input_error($input) {
		$input.css({'border': '3px solid #d40404'});
	}

	function input_correct($input) {
		$input.css({'border': '1px solid #b3b3b3'});
	}

});