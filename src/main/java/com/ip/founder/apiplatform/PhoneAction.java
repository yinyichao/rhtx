package com.ip.founder.apiplatform;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/phone")
public class PhoneAction {
	@Autowired
	private SimpMessagingTemplate messagingTemplate;
	
	@RequestMapping(value = "/call", method = RequestMethod.GET)
	@CrossOrigin
	@ResponseBody
	// 0成功，1失败
	public String findCameraView(String number) {
		System.out.println(number);
		messagingTemplate.convertAndSend("/topic/getResponse", number);
		return "0";
	}

	@RequestMapping(value = "/hangup", method = RequestMethod.GET)
	@CrossOrigin
	@ResponseBody
	// 0成功，1失败
	public String hangup() {
		messagingTemplate.convertAndSend("/topic/getResponse", "-1");
		return "0";
	}

	@RequestMapping(value = "/view", method = RequestMethod.GET)
	public String view(Model model) {
		return "/view";
	}
}
