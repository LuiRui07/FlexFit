import UserModel from "../models/UserModel.js";

// Creamos el CRUD PARA EL USUARIO

// CREATE USER
export const createUser = async (req, res) => {
    const { nombre, apellido1, apellido2, edad, altura, peso, sexo, username, password } = req.body;
    try {
        let User = await UserModel.findOne({
            where: {
                username
            }
        });
        if (User) {
            return res.json({
                message: 'This user already exists',
                data: {}
            });
        }else{

            let newUser = await UserModel.create({
                nombre,
                apellido1,
                apellido2,
                edad,
                altura,
                peso,
                sexo,
                username,
                password
            }, {
                fields: ['nombre', 'apellido1', 'apellido2', 'edad', 'altura', 'peso', 'sexo', 'username', 'password']
            });
            if (newUser) {
                return res.json({
                    message: 'User created successfully',
                    data: newUser
                });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// GET ALL USERS
export const getAllUsers = async (req, res) => {
    try {
        let Users = await UserModel.findAll({
            include: [{all: true,nested: true}]
        });
        if (Users) {
            return res.json({
                message: `${Users.length} Users found`,
                data: Users
            });
        }else{
            return res.json({
                message: 'Users not found',
                data: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// GET AN USER
export const getUser = async (req, res) => {
    const { username } = req.params;
    try {
        let User = await UserModel.findOne({
            where: {
                username
            },
            include: [{all: true}]
        });
        if (User) {
            return res.json({
                message: 'User found successfully',
                data: User
            });
        }else{
            return res.json({
                message: 'User not found',
                data: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// DELETE AN USER
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        let User = await UserModel.destroy({
            where: {
                id
            }
        });
        if (User) {
            return res.json({
                message: 'User deleted successfully',
                data: User
            });
        }else{
            return res.json({
                message: 'User not found',
                data: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

// UPDATE AN USER
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido1, apellido2, edad, altura, peso, sexo, username, password } = req.body;
    try {
        let User = await UserModel.findAll({
            attributes: ['id', 'nombre', 'apellido1', 'apellido2', 'edad', 'altura', 'peso', 'sexo', 'username', 'password'],
            where: {
                id
            }
        });
        if (User.length > 0) {
            User.forEach(async user => {
                await user.update({
                    nombre,
                    apellido1,
                    apellido2,
                    edad,
                    altura,
                    peso,
                    sexo,
                    username,
                    password
                });
            });
        }
        return res.json({
            message: 'User updated successfully',
            data: User
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export const logInUser = async (req, res) => {
    const {username, password} = req.params;
    
    console.log(username + " " + password);
    try {
        let User = await UserModel.findOne({
            where: {
                username,
                password
            }
        });
        if (User) {
            return res.json({
                message: 'User found successfully',
                data: User
            });
        }else{
            return res.json({
                message: 'Invalid username or password',
                data: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}