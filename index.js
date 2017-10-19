//onoff�� Gpio����� ���    
var Gpio = require('onoff').Gpio,    
    //GPIO 21���� ������� ����� �� �ִ� ��ü�� ����  
    led = new Gpio(3, 'out');    
  
var led_state = 0;  
  
//setInterval�ȿ� �ִ� ������ 200ms���� ������    
var iv = setInterval(function(){    
  
    //led�� ����� GPIO�� �ɰ��� �о�ͼ�   
    led_state=led.readSync();  
  
    //�ش簪�� ������ ���� ���� LED�� ���°����� ������  
    //��������� LED�� �����̰Ե�  
    if (led_state == 0 ) led_state = 1;  
    else led_state = 0;  
  
    //led_state���� gpio�� ���  
    led.writeSync(led_state)    
}, 200);    
     
// 5�� �Ŀ� LED�� �����̴°� ������    
setTimeout(function() {    
    clearInterval(iv); // LED�� �����̰� �ߴ� ���͹��� ����  
    led.writeSync(0);  // LED�� ����.  
    led.unexport();    // ����ߴ� GPIO�ڿ��� �����Ѵ�.   
}, 5000);  
