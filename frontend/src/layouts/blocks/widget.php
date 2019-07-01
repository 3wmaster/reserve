<div id="widget" data-modules="resizing" class="widget">
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
    <form class="widget_form" data-modules="form" autocomplete="off" action="/">
        <input type="hidden" name="restaurant_id" value="23232" />
        <div class="widget_set widget_set-header">
            <div class="widget_date field field-icon">
                <input class="field_input" data-modules="uidatepicker" name="date" type="text" value="<?php echo date('d-m-Y');?>"  name="date" />
                <button class="field_btn">
                    <svg class="field_icon symbol symbol-calendar" role="img"><use xlink:href="#calendar"></use></svg>
                </button>
            </div>
            <div data-form-modules="persons" class="widget_persons persons">
                <button class="persons_btn" data-persons-btn="-1">-</button>
                <div class="persons_data">
                    <input class="persons_num"  data-persons-result name="count" type="text" readonly value="2" />
                    <span class="persons_name">персоны</span>
                </div>
                <button class="persons_btn" data-persons-btn="1">+</button>
            </div>
        </div>
        <div class="widget_set widget_set-content">
            <span class="widget_formTitle">Время</span>
            <div class="widget_times" data-form-modules="times">
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
                <label class="widget_time time">
                    <input class="time_field" type="radio" name="time" value="1" />
                    <span class="time_data">10:00</span>
                </label>
            </div>
        </div>
        <div class="widget_set widget_set-footer">
            <input class="widget_field field" type="text" value="" placeholder="Имя" required />
            <div class="widget_field field field-icon field-icon-phone">
                <input class="field_input" data-modules="telMask" type="tel" name="phone" placeholder="(000) 000-00-00" value="" required />
                <button class="field_btn">+7</button>
            </div>
            <input class="widget_field widget_field-wide field" type="text" value="" placeholder="Ваши пожелания, если имеются" />
        </div>
        <input class="widget_submit btn btn-success" type="submit" value="Забронировать" />
    </form>
    <form class="widget_smsForm" data-modules="smsForm" autocomplete="off" action="/">
        <div data-smsForm-infoTag class="widget_orderInfo"></div>
        <span class="widget_title">Потвердите номер телефона</span>
        <input data-smsForm-bookingField type="hidden" name="booking_id" value="" />
        <input data-smsForm-phoneField type="hidden" name="phone" value="" />
        <input class="widget_field widget_field-code field" name="code" type="password" value="" placeholder="Код из СМС" required />
        <input class="widget_submit btn btn-success" type="submit" value="Подтвердить" />
        <button data-smsForm-cancelBtn class="widget_cancelBtn btn btn-secondary">Отмена</button>
    </form>
    <button class="widget_close" data-confirm-btn>
        <svg class="widget_closeIcon symbol symbol-x" role="img" ><use xlink:href="#x" /></svg>
    </button>
    <iframe class="widget_resizing" src="javascript:''" data-height-resizing></iframe>
</div>
