for (let index = 1; index <= 20; index++) {
       
    if (((index % 5) == 0) && ((index % 3) == 0)) //evalua si es resto es 0=par o 1=impar
    {
        console.log('FizzBuzz');
    } else {
        if ((index % 3) == 0) //evalua si es resto es 0=par o 1=impar
        {
            console.log('Fizz');
        } else {
            if ((index % 5) == 0) //evalua si es resto es 0=par o 1=impar
            {
                console.log('Buzz');
            } else console.log(index);
        }

    }
}
