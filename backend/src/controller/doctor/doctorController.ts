import { Request, Response } from "express";
import { prisma } from "../../database/prisma";


export class DoctorController {
  async create(req: Request, res: Response) {
    try {
      const { name, specialty,  } = req.body;

      const hours = [
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
      ]

    await prisma.doctor.create({
      data:{
        name,
        specialty,
      }
    })

    return res.status(201).json('Médico criado com sucesso!')
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  async index(req: Request, res: Response) {
    try {
      const doctors = await prisma.doctor.findMany()

      return res.status(200).json(doctors)
    } catch (error) {
      return res.status(400).json(error)
    } 
  }
}