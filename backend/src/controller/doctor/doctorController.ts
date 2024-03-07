import { Request, Response } from "express";
import { prisma } from "../../database/prisma";

export class DoctorController {
  async create(req: Request, res: Response) {
    try {
      const { name, specialty } = req.body;

    await prisma.doctor.create({
      data: {
        name,
        specialty,
      }
    })

    return res.status(201).json('Médico criado com sucesso!')
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  async index(req: Request, res: Response) {
    try {
      const doctors = await prisma.doctor.findMany()

      return res.status(200).json(doctors)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    } 
  }
}