<div data-modules="resizing" class="widget">
    <div class="widget_header">
        <span class="widget_title">Забронировать столик</span>
        <span class="widget_name">Ресторан «МореШаль»</span>
        <div class="widget_confirm confirm" data-modules="confirm">
            <div class="confirm_title">Прекратить бронирование?</div>
            <div class="confirm_btns">
                <button class="confirm_btn btn btn-small btn-secondary" data-confirm-close>Прекратить</button>
                <button class="confirm_btn btn btn-small btn-success" data-confirm-continue>Продолжить</button>
            </div>
        </div>
    </div>
    <form class="widget_form" data-modules="form" autocomplete="off">
        <div class="widget_set widget_set-header">
            <div class="widget_date field field-icon">
                <input class="field_input" data-modules="uidatepicker" type="text" value="<?php echo date('Y-m-d');?>"  name="date" />
                <button class="field_btn">
                    <svg class="field_icon symbol symbol-calendar" role="img"><use xlink:href="#calendar"></use></svg>
                </button>
            </div>
            <div data-modules="persons" class="widget_persons persons">
                <button class="persons_btn" data-persons-btn="-1">-</button>
                <div class="persons_data">
                    <input class="persons_num"  data-persons-result type="text" readonly value="2" />
                    <span class="persons_name">персоны</span>
                </div>
                <button class="persons_btn" data-persons-btn="1">+</button>
            </div>
        </div>
        <div class="widget_set widget_set-content">
            <span class="widget_formTitle">Время</span>
            <div class="widget_times" data-modules="times"> </div>
        </div>
        <div class="widget_set widget_set-footer">
            <input class="widget_field field" type="text" value="Имя" required />
            <div class="widget_field field field-icon field-icon-phone">
                <input class="field_input" data-modules="telMask" type="tel" placeholder="(000) 000-00-00" value=""  />
                <button class="field_btn">+7</button>
            </div>
            <input class="widget_field widget_field-wide field" type="text" value="Ваши пожелания, если имеются" required />
        </div>
        <input class="widget_submit btn btn-success" type="submit" value="Забронировать" />
    </form>
    <button class="widget_close" data-confirm-btn>
        <svg class="widget_closeIcon symbol symbol-x" role="img" ><use xlink:href="#x" /></svg>
    </button>
    <iframe class="widget_resizing" src="javascript:''" data-height-resizing></iframe>
</div>
