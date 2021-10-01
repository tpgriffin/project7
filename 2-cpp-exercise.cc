
struct Element {
    Element* prev;
    Element* next;
    int value;
};

// Sorts from lowest to highest and returns the first element of the list.
Element* SortAscending(Element* first);

// Reverses the order of the list and returns the first element of the list.
Element* Reverse(Element* first);

// Deletes a given element from a list and returns the first element of the list.
Element* DeleteElement(Element* first, Element* elementToDelete);


Element* SortAscending(Element* first) {
    Element* newFirst = first;
    Element* temp = first;
 
    // scan List
    while (temp) {
        Element* min = temp;
        Element* r = temp->next;
 
        // scan the rest
        while (r) {
            if (min->value > r->value) {
                min = r;
                newFirst = r; // get overall min
            }
            r = r->next;
        }

        // swap
        int x = temp->value;
        temp->value = min->value;
        min->value = x;
        temp = temp->next;
    }
    return newFirst;
}

Element* Reverse(Element* first) {
    Element* temp = NULL;
    Element* prev = NULL;
    Element* current = first;
    while(current != NULL) {
        temp = current->next;
        current->next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}

Element* DeleteElement(Element* first, Element* elementToDelete) {
{
    Element* temp = elementToDelete->next;
    elementToDelete->next = temp->next;

    // get the new first element
    if first == temp {
        first = temp->next
    }

    delete temp;
    return first;
}