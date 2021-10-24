# create table schemas
CREATE TABLE Donor (
    name VARCHAR(255) NOT NULL,
    id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE Listing (
    brand VARCHAR(255) NOT NULL,
    device_type VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    quantity INT,
    listing_id INT AUTO_INCREMENT PRIMARY KEY,
    donor_id INT references Donor (id)
);

CREATE TABLE Recipient (
    name VARCHAR(255) NOT NULL,
    id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE Request (
    device_type VARCHAR(255) NOT NULL,
    quantity INT,
    fulfilled BOOLEAN,
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    recipient_id INT references Recipient (id)
);

# Insert dummy data
INSERT INTO Donor (name) values ('Microsoft'), ('Apple');
INSERT INTO Listing (brand, device_type, model, quantity, donor_id) values ('Apple', 'tablet', 'iPad Mini 2', 100, 2),
                                                                           ('Microsoft', 'tablet', 'Surface Pro X', 150, 1);
INSERT INTO Recipient (name) values ('Roots Young Adult Shelter');
INSERT INTO Request (device_type, quantity, fulfilled, recipient_id) values ('tablet', 10, false, 1);

