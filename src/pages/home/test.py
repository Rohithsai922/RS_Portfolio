import numpy as np

def generate_key_matrix(key):
    key = key.replace(" ", "").upper()
    key = key + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    key = ''.join(dict.fromkeys(key))  # remove duplicates while preserving order
    key_matrix = np.array(list(key)).reshape(6, 6)
    return key_matrix

def preprocess_message(message):
    message = message.replace(" ", "").upper()
    # Handle pairs with same letters by adding an 'X' between them
    for i in range(0, len(message) - 1, 2):
        if message[i] == message[i + 1]:
            message = message[:i + 1] + 'X' + message[i + 1:]
    # If the message length is odd, append an 'X' to make it even
    if len(message) % 2 != 0:
        message += 'X'
    return message

def find_char(char, key_matrix):
    for i in range(6):
        for j in range(6):
            if key_matrix[i][j] == char:
                return i, j

def encrypt(message, key_matrix):
    message = preprocess_message(message)
    encrypted_message = ""
    for i in range(0, len(message), 2):
        char1, char2 = message[i], message[i + 1]
        row1, col1 = find_char(char1, key_matrix)
        row2, col2 = find_char(char2, key_matrix)
        if row1 == row2:  # same row
            encrypted_message += key_matrix[row1][(col1 + 1) % 6]
            encrypted_message += key_matrix[row2][(col2 + 1) % 6]
        elif col1 == col2:  # same column
            encrypted_message += key_matrix[(row1 + 1) % 6][col1]
            encrypted_message += key_matrix[(row2 + 1) % 6][col2]
        else:  # rectangle
            encrypted_message += key_matrix[row1][col2]
            encrypted_message += key_matrix[row2][col1]
    return encrypted_message

def decrypt(message, key_matrix):
    decrypted_message = ""
    for i in range(0, len(message), 2):
        char1, char2 = message[i], message[i + 1]
        row1, col1 = find_char(char1, key_matrix)
        row2, col2 = find_char(char2, key_matrix)
        if row1 == row2:  # same row
            decrypted_message += key_matrix[row1][(col1 - 1) % 6]
            decrypted_message += key_matrix[row2][(col2 - 1) % 6]
        elif col1 == col2:  # same column
            decrypted_message += key_matrix[(row1 - 1) % 6][col1]
            decrypted_message += key_matrix[(row2 - 1) % 6][col2]
        else:  # rectangle
            decrypted_message += key_matrix[row1][col2]
            decrypted_message += key_matrix[row2][col1]
    return decrypted_message

def main():
    key = input("Enter the key for the Playfair cipher: ")
    key_matrix = generate_key_matrix(key)
    
    while True:
        mode = input("Choose mode (encrypt/decrypt) or type 'quit' to exit: ").lower()
        if mode == 'quit':
            break
        elif mode == 'encrypt':
            message = input("Enter the message to encrypt: ")
            encrypted_message = encrypt(message, key_matrix)
            print("Encrypted message:", encrypted_message)
        elif mode == 'decrypt':
            message = input("Enter the message to decrypt: ")
            decrypted_message = decrypt(message, key_matrix)
            print("Decrypted message:", decrypted_message)
        else:
            print("Invalid mode. Please choose encrypt or decrypt.")

if __name__ == "__main__":
    main()
