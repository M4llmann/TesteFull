import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permite CORS para todos os endpoints que começam com /api/
        registry.addMapping("/api/**")  // Mapeia todos os endpoints /api/
                .allowedOrigins("http://localhost:4200")  // Permite apenas requisições de http://localhost:4200
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Métodos HTTP permitidos
                .allowedHeaders("*")  // Permite todos os cabeçalhos
                .allowCredentials(true);  // Permite enviar cookies ou credenciais
                
    }
}