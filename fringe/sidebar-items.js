initSidebarItems({"struct":[["Context","Context is the heart of libfringe. A context represents a saved thread of execution, along with a stack. It can be swapped into and out of with the swap method, and once you're done with it, you can get the stack back through unwrap."],["OsStack","This object represents a stack from the operating system's anonymous memory mapping facility, usually `mmap`. The stack it provides comes with a guard page, which is not included in the stack limit."]],"trait":[["Stack","A trait for objects that hold ownership of a stack."]]});