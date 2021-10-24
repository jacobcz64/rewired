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
    donor_id INT references Donors (id)
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
    donor_id INT references Donors (id)
);

# Insert dummy data
INSERT INTO Donor (name) values ('Microsoft'), ('Apple');

# Get Donor

# Get Recipient

# Get Listing

# Get Request

