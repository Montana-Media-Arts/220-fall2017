void setup() {
  Serial.begin(9600); // initialize serial communications
}
 
void loop() {
  int pot1 = analogRead(A0);                  // read the input pin
  int pot2 = analogRead(A1);
  
  Serial.print(pot1);    
  Serial.print(',');
  Serial.println(pot2);
  
  delay(1);                                            // slight delay to stabilize the ADC
}
