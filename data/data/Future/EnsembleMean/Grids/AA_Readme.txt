
varaible name: data

warning:
to reduce file size, we have stored data as int16 format, so

1. data values in most files were multiplied by 10, after you read them, please divid them by 10.0 
   (not include CHU, HDD and SDII)

2. data values of CHU and HDD were saved as int16

3. data values of SDII were multiplied by 100 and saved as int16, after you read them, please divid them by 100.0 