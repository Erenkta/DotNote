package com.example.DotNote.Shared.Email;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.DotNote.User.Entity.User;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {
	
	JavaMailSenderImpl mailSender;
	
	@Autowired
	DotNoteProperties hoaxifyProperties;
	
	String activationEmail = """
			<html>
				<body>
					<h1>Activate Account</h1>
					<a href="${url}">Click Here</a>
				</body>
			</html>
			""";
	
//	@PostConstruct // Kendin bir constructor oluştur bundan sonra da bu fonksiyonu çağır
//	public void initialize() {
//		this.mailSender = new JavaMailSenderImpl();
//		mailSender.setHost("http://localhost:5173");
//		mailSender.setPort(587);
//		mailSender.setUsername("katelynn.farrell@ethereal.email");
//		mailSender.setPassword("uTX5a6xsDaZSnmua9y");
//
//		Properties properties = mailSender.getJavaMailProperties();
//		properties.put("mail.smtp.starttls.enable","true");		
//		properties.put("mail.smtp.ssl.trust","*");
//		properties.put("mail.smtp.port",587);
//		properties.put("mail.smtp.auth","true");
//	}
	
    public JavaMailSender getJavaMailSender(){
    	this.mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.ethereal.email");
        mailSender.setPort(587);
        mailSender.setUsername("katelynn.farrell@ethereal.email");
        mailSender.setPassword("uTX5a6xsDaZSnmua9y");
        

		Properties properties = mailSender.getJavaMailProperties();
		properties.put("mail.smtp.starttls.enable","true");		
		properties.put("mail.smtp.ssl.trust","*");
		properties.put("mail.smtp.port",587);
		properties.put("mail.smtp.auth","true");
        return mailSender;

    }
	public void sendActivationMail(User user) {
//	    SimpleMailMessage message = new SimpleMailMessage();
//	    message.setFrom("noreply@my-app.com");
//	    message.setTo(user.getEmail());
//	    message.setSubject("Account Activation");
//	    message.setText("http://localhost:5173/activation/"+user.getActivationToken());
//	    getJavaMailSender().send(message);
		
		var activationUrl ="http://localhost:5173/activation/"+user.getActivationToken();
		var mailBody = activationEmail.replace("${url}", activationUrl);
			
		
		MimeMessage mimeMessage = getJavaMailSender().createMimeMessage(); // Nedir ne işe yarar bi bak
		MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
		
		
		//SimpleMailMessage message = new SimpleMailMessage(); HTML body yazdık ondan bunun yerine MimeMessage kullandık sanırım

		try {
			message.setFrom("noreply@my-app.com");
			message.setTo(user.getEmail());
			message.setSubject("Account Activation Mail");
			message.setText(mailBody,true); // true olan kısım bunun bir html olduğunu belirtir
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		getJavaMailSender().send(mimeMessage);
	}
	
}
