**Adam Boyd**

**NetID: xv3543**

# Homework #1 Solution

## Question 1

### (a)
![Screenshot for 1a](https://github.com/CSUEB-DrB-CS/assignment-phoenix239/blob/master/images/Git01.JPG)

### (b)
![Screenshot for 1b](https://github.com/CSUEB-DrB-CS/assignment-phoenix239/blob/master/images/Git02.JPG)

## Question 2

### (a)

### (b)
![Screenshot for 2b](https://github.com/CSUEB-DrB-CS/assignment-phoenix239/blob/master/images/Git03.JPG)


### (c)
![Screenshot for 2c](https://github.com/CSUEB-DrB-CS/assignment-phoenix239/blob/master/images/Git04.JPG)

## Question 3

### (a)

### (b)

## Question 4

### (a)
My programming languages:
1. C/C++
2. HTML
3. Java
4. Python
5. Lua

### (b)
* Windows
* Linux
* MacOS

### (c)
* Visual Studio 2019
* Visual Studio Code
* Notepad++
* Dreamweaver

## Question 5

### (a)
```C++
int main()
{
    int size, x = 0;
    vector<int> v, temp;
    ifstream myfile("input.txt");

    if (myfile.is_open()) {
        myfile >> size;

        while (myfile >> x) {
            v.push_back(x);
        }

        myfile.close();

        cout << "File: input.txt\nCount: " << mergeSort(v, temp, 0, size-1) << endl << endl;
    }
    else {
        cout << "\nError: Unable to Open File!\n" << endl;
        return 0;
    }

    return 0;
}```

### (b)
For most of my C++ projects I have had to look up functions on [cplusplus.com](https://www.cplusplus.com/reference/) so that I can know the exact syntax and usage. Its a great site with exapmles of how to use the functions.